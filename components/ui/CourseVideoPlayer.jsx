import React from 'react'
import VideoPlayer from '../VideoPlayer'
import ClassList from '../list/ClassList'
import WorldIcon from '../icons/WorldIcon'
import InstagramIcon from '../icons/InstagramIcon'
import ProEvaIcon from '../icons/ProEvaIcon'

const CourseVideoPlayer = ({ classes, courseData, edition, num }) => {
  const classData = classes[num]
  return (
    <main className="flex-1 flex flex-col md:flex-row md:justify-center m-auto w-full md:max-w-7xl">
      <div className="md:flex-1 md:max-h-[calc(100vh_-_64px)]">
        {
          classData.videos == null
            ? <iframe width="420" height="315" className="w-full h-full aspect-video" src={classData.externalLink} />
            : <VideoPlayer src={classData.videos} />
        }
      </div>
      <aside className="md:max-w-xs flex flex-col md:max-h-[calc(100vh_-_64px)] md:overflow-y-auto">
        <h2 className="text-center p-2 text-md font-coolvetica font-semibold">{courseData.name}</h2>
        <div className="text-center px-1 py-2 bg-gray-100">
          <h3 className="text-sm font-coolvetica font-semibold">¡Gracias OpenFING por compartir esta obra! 💙</h3>
          <p className="font-sans text-sm">Encuentralos En:</p>
          <ul className="flex py-1 gap-3 justify-center items-center">
            <li>
              <a href="https://open.fing.edu.uy/" target="_blank">
                <WorldIcon width={16} height={16} fill="#0074ba" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/openfing/" target="_blank">
                <InstagramIcon width={16} height={16} fill="#0074ba" />
              </a>
            </li>
            <li>
              <a href="https://eva.fing.edu.uy/course/view.php?id=940" target="_blank">
                <ProEvaIcon width={16} height={16} fill="#0074ba" />
              </a>
            </li>
          </ul>
        </div>
        <ClassList selectedClass={num} classes={classes} edition={edition} />
      </aside>
    </main>
  )
}

export default CourseVideoPlayer
