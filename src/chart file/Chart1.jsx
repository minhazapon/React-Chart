import { CartesianAxis, Line, LineChart, XAxis, YAxis } from "recharts";



const Chart1 = () => {

    const dataChart = [

        { "id": 1, "name": "Alice", "math_marks": 78 },
        { "id": 2, "name": "Bob", "math_marks": 85 },
        { "id": 3, "name": "Charlie", "math_marks": 92 },
        { "id": 4, "name": "Diana", "math_marks": 67 },
        { "id": 5, "name": "Ethan", "math_marks": 74 },
        { "id": 6, "name": "Fiona", "math_marks": 88 },
        { "id": 7, "name": "George", "math_marks": 90 },
        { "id": 8, "name": "Hannah", "math_marks": 76 },
        { "id": 9, "name": "Ian", "math_marks": 84 },
        { "id": 10, "name": "Julia", "math_marks": 91 },
        { "id": 11, "name": "Kevin", "math_marks": 79 },
        { "id": 12, "name": "Lily", "math_marks": 87 },
        { "id": 13, "name": "Mason", "math_marks": 73 },
        { "id": 14, "name": "Nora", "math_marks": 82 },
        { "id": 15, "name": "Oliver", "math_marks": 95 },
        { "id": 16, "name": "Paula", "math_marks": 70 },
        { "id": 17, "name": "Quinn", "math_marks": 86 },
        { "id": 18, "name": "Ryan", "math_marks": 93 },
        { "id": 19, "name": "Sophia", "math_marks": 80 },
        { "id": 20, "name": "Thomas", "math_marks": 1000 }

      ]
      



    return (
        <div className=" flex justify-center mt-20 mb-20 ">

            <div>

            <LineChart width={700} height={500} data={dataChart}>
            <XAxis dataKey="math_marks"/>
            <YAxis/>
            <CartesianAxis stroke="#eee" strokeDasharray="5 5"/>
            <Line type="monotone" dataKey="name" stroke="#8884d8" />
            <Line type="monotone" dataKey="math_marks" stroke="#82ca9d" />
            </LineChart>

            </div>
            
        </div>
    );
};

export default Chart1;