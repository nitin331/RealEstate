import React, { useEffect, useState } from 'react';

const stats = [
  { value: 300, label: 'Happy Clients' },
  { value: 1000, label: 'Property Ready' },
  { value: 80, label: 'Completed Agents' },
  { value: 60, label: 'Years Growth', isPercentage: true },
];

const categories = [
  { name: 'Residential', properties: 55, icon: '🏡' },
  { name: 'Commercial', properties: 88, icon: '🏢' },
  { name: 'Vacation & Resort', properties: 74, icon: '🏖️' },
  { name: 'The Land', properties: 65, icon: '🌍' },
  { name: 'New Construction', properties: 72, icon: '🏗️' },
  { name: 'Luxury Estate', properties: 49, icon: '🏰' },
  { name: 'Eco Friendly', properties: 53, icon: '🌱' },
  { name: 'Historic Properties', properties: 28, icon: '🏛️' },
];

const StatsAndCategories = () => {
  const [currentStats, setCurrentStats] = useState(stats.map(() => 0));

  useEffect(() => {
    const increments = stats.map(stat => stat.value / 100); // Increment for each stat
    const intervals = [];

    // Function to update each stat
    const updateStat = (index) => {
      intervals[index] = setInterval(() => {
        setCurrentStats((prevStats) => {
          const newStats = [...prevStats];
          if (newStats[index] < stats[index].value) {
            newStats[index] = Math.min(newStats[index] + increments[index], stats[index].value);
          } else {
            clearInterval(intervals[index]);
          }
          return newStats;
        });
      }, 20); // Change this for speed control
    };

    // Start the increment for each stat
    stats.forEach((_, index) => updateStat(index));

    // Clear intervals when component unmounts
    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-red-600">
                {stat.isPercentage ? `${Math.floor(currentStats[index])}%` : Math.floor(currentStats[index]) + '+'}
              </div>
              <div className="text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl w-full">
            {categories.map((category, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow text-center">
                <div className="text-4xl mb-2">{category.icon}</div>
                <div className="text-lg font-semibold">{category.name}</div>
                <div className="text-gray-500">{category.properties} Properties</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsAndCategories;
