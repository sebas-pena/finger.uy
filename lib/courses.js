import courses from '@/data/courses/index.json'
import fs from 'fs/promises'
import path from 'path'
import { removeExtension } from './string'

export const EDITIONS_PATH = path.join(process.cwd(), '/data/editions')

export const getCoursesCodes = () => {
  return courses.map((course) => course.code)
}

export const getCourseByCode = (code) => {
  return courses.find((course) => course.courseCode === code)
}

export const getCourseByEditionCode = (code) => {
  return courses.find((course) => {
    const editions = Object.values(course.editions)
    return editions.some((edition) => edition.some((e) => e.code === code))
  })
}

export const getEditionByCode = async (code) => {
  const file = JSON.parse(await fs.readFile(EDITIONS_PATH + `/${code}.json`, 'utf8'))
  console.log(file)
  return file
}

export const getAllEditionsCodes = async () => {
  const files = await fs.readdir(EDITIONS_PATH)
  return files.map((file) => removeExtension(file))
}
