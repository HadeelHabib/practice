import CourseCard from "@/shared/components/cards/course.card";

const Courses = () => {
  return (
    <div className="w-[95%] md:w-[85%] m-auto py-5">
      <h1 className="title text-center !text-3xl md:!text-5xl">
        Popular <span className="text-gradient">Courses</span>
      </h1>
      <p className="label font-Poppins relative text-center !text-[18px] py-3">
        <span className="dot" /> our comprehensive project based courses
      </p>
      <br />
      <br />
      <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-3 xl:gap-[35px] mb-12 border-0 md:pl-5">
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default Courses;
