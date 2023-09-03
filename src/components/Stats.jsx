
const Stats = () => {
  const stats = [
    {
      data: "2.5M+",
      title: "Death/Yr",
    },
    {
      data: "2-5 Yrs",
      title: "Most Infected Age",
    },
    {
      data: "150+",
      title: "Affected Countries",
    },
    {
      data: "1B+",
      title: "Total Infected",
    },
  ];

  return (
    <div className="py-20 sm:py-28">
      <div className='custom-screen flex justify-center sm:block'>
        <ul className='inline-grid grid-cols-2 items-center justify-center gap-x-12 gap-y-10 sm:flex sm:flex-wrap md:gap-x-24'>
          {stats.map((item, idx) => (
            <li key={idx} className='text-center'>
              <h3 className='text-4xl text-gray-800 font-semibold'>
                {item.data}
              </h3>
              <p className='mt-3 text-gray-600 font-medium'>{item.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default Stats