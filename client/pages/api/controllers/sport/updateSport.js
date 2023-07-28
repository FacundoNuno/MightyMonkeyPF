import { db } from "../../db";
const { Sport,Court } = db;

export default async (sportInfo) => {
  const sport = Sport.update(sportInfo, {
    where: { id: sportInfo.id },
  });
  if (!sport) return sport;
  const updatedSport = Sport.findByPk(
    sportInfo.id,
    {
        attributes: {
            exclude: [
                'createdAt',
                'updatedAt'
            ]
        },
        include:{
            model: Court,
            as: 'court',
            attributes:{
                exclude: [
                    'createdAt',
                    'updatedAt',
                    'sportId'
                ]
            }
        }
    }
  );
  return updatedSport;
};
