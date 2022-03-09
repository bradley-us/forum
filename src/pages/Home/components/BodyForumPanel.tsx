import CourseCard from "../../../app_components/layout/CourseCard"

const BodyForumPanel = () => {
  return (
    <div className="flex flex-row flex-wrap gap-5 items-center justify-center py-10 px-10">
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </div>
  )
}

export default BodyForumPanel