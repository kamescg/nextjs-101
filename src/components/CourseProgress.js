const CourseProgress = ({ units, progress }) => {
  const unitReward = 10;
  const totalReward = units.length * unitReward;
  const completedUnitsCount = progress.length;
  const awardedPts = completedUnitsCount * unitReward;

  return (
    <div className="bg-white p-4 mb-4 border border-gray-200 rounded-sm md:border-0 md:p-0">
      <p className="text-center mb-2">
        <strong className="text-lg">{completedUnitsCount * unitReward}</strong>{" "}
        points
      </p>
      <div className="w-full bg-gray-200">
        <div
          style={{ width: `${100 / (totalReward / awardedPts)}%` }}
          className="border-t-2 border-blue-500"
        />
      </div>
    </div>
  );
};

export default CourseProgress;