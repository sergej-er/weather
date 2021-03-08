import React from 'react';
import WeatherChart from '../../components/WeatherChart';
import Section from '../../components/Section';
import WeatherCard from '../../components/WeatherCard';
import _ from 'lodash';
import NotFound from '../../components/NotFound';

export default function Weather({ city, today, forecast }) {
  return (
    <div>
      {forecast ? (
        <Section>
          <WeatherCard today={today} city={city} />
          <WeatherChart />
        </Section>
      ) : (
        <NotFound />
      )}
    </div>
  );
}

export const getServerSideProps = async (pageContext) => {
  const location = pageContext.query.location;

  const apiResponse = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${process.env.API_KEY}`
  );

  const apiJson = await apiResponse.json();

  if (apiJson.cod !== '200') {
    return {
      props: {
        city: location,
        today: null,
        forecast: null,
      },
    };
  }

  const { list, city } = apiJson;

  let data = list.map((entry) => {
    const date = entry.dt_txt.split(' ')[0];
    const min = entry.main.temp_min;
    const max = entry.main.temp_max;

    return {
      date,
      min,
      max,
    };
  });

  const groupedByDay = _.groupBy(data, (e) => e.date);
  const groupedByMin = _.map(groupedByDay, (ele) => _.minBy(ele, (e) => e.min));
  const groupedByMax = _.map(groupedByDay, (ele) => _.maxBy(ele, (e) => e.max));

  const combined = await _.map(groupedByMin, (e, i) => {
    return {
      date: e.date,
      min: Math.round(groupedByMin[i].min),
      max: Math.round(groupedByMax[i].max),
    };
  });

  return {
    props: {
      city,
      today: list[0],
      forecast: combined,
    },
  };
};
