import React, { useState, useEffect } from 'react';

import CalendarHeatmap from 'react-calendar-heatmap';

import 'react-calendar-heatmap/dist/styles.css';
import DoughnutChart from '../charts/Doughnut';
import { LineChartSentiment } from '../charts/LineSentiment';

import { useAuth } from '../context/authContext';

import { useNavigate } from 'react-router-dom';

import { collection, getDocs, query, where } from '@firebase/firestore';
import { db } from '../api/firebase';

import { Button } from 'react-bootstrap';

const Home = () => {
  const [data, setData] = useState(null);
  const [average, setAverage] = useState({});
  const [heatMapValues, setHeatMapValues] = useState([]);

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  async function getJournalRecordsFromFirebaseForUser() {
    try {
      let q = query(
        collection(db, 'journal'),
        where('user', '==', currentUser.uid)
      );
      const querySnapshot = await getDocs(q);
      const d = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      getHeatMapEntries(d);
      getAverageForEmotionsAndSentiment(d);
      setData(d);
    } catch (error) {
      console.log('Error from firebase - home view: ', error);
    }
  }

  function getHeatMapEntries(d) {
    let heatMap = d.map((d) => {
      return {
        date: new Date(d.createdAt.seconds * 1000).toISOString(),
        text: d.text,
        emoji: d.emoji,
        data: d.data,
      };
    });

    setHeatMapValues(heatMap);
  }

  function getAverageForEmotionsAndSentiment(d) {
    let sadnessAverage = 0;
    let angerAverage = 0;
    let fearAverage = 0;
    let joyAverage = 0;
    let disgustAverage = 0;

    d.forEach((ele) => {
      sadnessAverage = sadnessAverage + ele.data[0].emotion.sadness;
      angerAverage = angerAverage + ele.data[0].emotion.anger;
      fearAverage = fearAverage + ele.data[0].emotion.fear;
      joyAverage = joyAverage + ele.data[0].emotion.joy;
      disgustAverage = disgustAverage + ele.data[0].emotion.disgust;
    });

    setAverage({
      sadness: sadnessAverage / d.length,
      anger: angerAverage / d.length,
      fear: fearAverage / d.length,
      joy: joyAverage / d.length,
      disgust: disgustAverage / d.length,
    });
  }

  function navigateToResultForThisDate(value) {
    navigate('/result', {
      state: { data: value.data, text: value.text, emoji: value.emoji },
    });
  }

  useEffect(() => {
    getJournalRecordsFromFirebaseForUser();
  }, []);

  if (!data) {
    return (
      <div>
        <h1>No Entry for your Journal Yet!</h1>
        <Button
          onClick={() => navigate('/entry')}
          style={{ marginTop: 50 }}
          variant='success'>
          Click to Add Entry
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className='d-flex align-items-center justify-content-center'>
        <div style={{ width: '800px', marginTop: 10 }}>
          <p>Year 2022</p>
          <CalendarHeatmap
            startDate={'Dec 31 2021'}
            endDate={'Dec 31 2022'}
            showOutOfRangeDays={true}
            values={heatMapValues}
            classForValue={(value) => {
              if (!value) {
                return 'color-empty';
              }
              return `color-github-${3}`;
            }}
            onClick={(value) => navigateToResultForThisDate(value)}
          />
        </div>
      </div>
      <p style={{ marginTop: 60 }} className='d-flex align-items-center justify-content-center'>Average Mood Analysis</p>
      <div
        className='d-flex align-items-center justify-content-center'>
        <DoughnutChart
          anger={average.anger}
          disgust={average.disgust}
          fear={average.fear}
          joy={average.joy}
          sadness={average.sadness}
        />
        <LineChartSentiment chartData={data} />
      </div>
    </div>
  );
};

export default Home;
