import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

const createCourse = (request: Request, response: Response) => {
  CreateCourseService.execute({
    name: 'NodeJS',
    educator: "Dani",
    duration: 10
  });
  response.status(201).json({
    'ok': true
  });
}

export default createCourse;