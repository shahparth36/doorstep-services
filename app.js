let obj = {
    _id       : '6098291a265c261fda95be9f',
    email     : 'email',
    password  : '12',
    workouts  : [
        {
            _id      : '6098bc905c75640542a7ee57',
            title    : 'xxxx',
            exercise : []
        },
        {
            _id      : '6098bca75c75640542a7ee58',
            title    : 'zzzz',
            exercise : [
                {
                    _id : '60993f89255d4d0e60de291e'
                },
                {
                    _id : '60993f8f255d4d0e60de291f'
                }
            ]
        }
    ],
    createdAt : '2021-05-09T18:25:30.274Z',
    updatedAt : '2021-05-10T14:13:35.702Z',
    __v       : 2
};
let workouts = obj.workouts;
const newExercise = [ { _id: 'adadjakldasda', reps: 2 }, { _id: 'afsdakdadasdasdd', reps: 5 } ];
obj.workouts = workouts.map((element) => {
    return { ...element, exercise: newExercise };
});
console.log(obj.workouts[0]);
