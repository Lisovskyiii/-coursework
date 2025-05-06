import { apiClient } from 'api';
import { IScheduleBase } from 'types/schedule.inerface';

export const getTeacherSchedule = async (body: IScheduleBase) => {
  try {
    const response = await apiClient.get(
      `/schedule/getTeacherSchedule?teacherId=${body.teacherId}&dateStart=${body.dateStart}`
    );
    return response.data;
  } catch (error) {
    console.dir(error);
  }
};
