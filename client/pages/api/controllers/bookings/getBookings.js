const { db } = require('../../db')
db.sequelize.sync()
const { Booking, User, Court, Sport } = db

module.exports = async() => {
    const bookings = await Booking.findAll({
        attributes: [
            'id', 'date', 'hour'
        ],
        include: [
            {
                model: User,
                as: 'user',
                attributes: [
                    'id',
                    'name',
                    'email',
                    'surname'
                ],
            },
            {
                model: Court,
                as: 'court',
                attributes: [
                    'name',
                    'description'
                ],
                include: {
                    model:Sport,
                    as:'sport',
                    attributes:[
                        'name',
                        'description'
                    ]
                }
            }
        ]
    })

    return bookings;
}

