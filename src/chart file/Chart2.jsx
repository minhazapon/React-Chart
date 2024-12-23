import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts";



const Chart2 = () => {


    const DataChart = [
        {
          "id": 1,
          "name": "Alice",
          "subject_name": "Math",
          "marks": 85
        },
        {
          "id": 2,
          "name": "Bob",
          "subject_name": "Science",
          "marks": 78
        },
        {
          "id": 3,
          "name": "Charlie",
          "subject_name": "English",
          "marks": 92
        },
        {
          "id": 4,
          "name": "Diana",
          "subject_name": "Math",
          "marks": 88
        },
        {
          "id": 5,
          "name": "Eve",
          "subject_name": "Science",
          "marks": 74
        },
        {
          "id": 6,
          "name": "Frank",
          "subject_name": "English",
          "marks": 81
        },
        {
          "id": 7,
          "name": "Grace",
          "subject_name": "Math",
          "marks": 90
        },
        {
          "id": 8,
          "name": "Hank",
          "subject_name": "Science",
          "marks": 69
        },
        {
          "id": 9,
          "name": "Ivy",
          "subject_name": "English",
          "marks": 94
        },
        {
          "id": 10,
          "name": "Jack",
          "subject_name": "Math",
          "marks": 72
        },
        {
          "id": 11,
          "name": "Kelly",
          "subject_name": "Science",
          "marks": 89
        },
        {
          "id": 12,
          "name": "Liam",
          "subject_name": "English",
          "marks": 77
        },
        {
          "id": 13,
          "name": "Mia",
          "subject_name": "Math",
          "marks": 95
        },
        {
          "id": 14,
          "name": "Nathan",
          "subject_name": "Science",
          "marks": 80
        },
        {
          "id": 15,
          "name": "Olivia",
          "subject_name": "English",
          "marks": 91
        },
        {
          "id": 16,
          "name": "Paul",
          "subject_name": "Math",
          "marks": 76
        },
        {
          "id": 17,
          "name": "Quinn",
          "subject_name": "Science",
          "marks": 83
        },
        {
          "id": 18,
          "name": "Ruby",
          "subject_name": "English",
          "marks": 88
        },
        {
          "id": 19,
          "name": "Steve",
          "subject_name": "Math",
          "marks": 84
        },
        {
          "id": 20,
          "name": "Tina",
          "subject_name": "Science",
          "marks": 70
        }
      ]
      
    



    return (
        <div className=" flex justify-center mt-32 ">


            <div>

            <RadarChart outerRadius={90} width={730} height={250} data={DataChart}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="subject_name" dataKey="marks" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="subject_name" dataKey="marks" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
            </RadarChart>

            </div>
            
        </div>
    );
};

export default Chart2;