import Hero from "@/components/Hero";
import PopularCourses from "@/components/PopularCourses";
import LearningTips from "@/components/LearningTips";
import TopInstructors from "@/components/TopInstructors";
import TrendingCourses from "@/components/TrendingCourses";

const HomePage = () => {
  return (
    <>
      <Hero />
      <PopularCourses />
      <LearningTips />
      <TopInstructors />
      <TrendingCourses />
    </>
  );
};

export default HomePage;