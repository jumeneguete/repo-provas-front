import axios from "axios";
import { AllSubjects, SubjectName, SubNameId  } from "./Styles";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Home from "./Home";

export default function ExamBySubject() {
    const { id } = useParams();
    const [register, setRegister] = useState([]);

    console.log(id)
    useEffect(() => {

        const result = axios.get(`http://localhost:4000/${id}/subject`);
        result.then(response => {
            console.log(response.data)
            setRegister(response.data);
        })

    }, []);

    return (
        <>
            <Home />
            <AllSubjects>
                {register.map(r => (
                    <>
                        <SubjectName> {r.subject.name}</SubjectName>
                        <Link to={`#`}>
                            <SubNameId key={r.id}>
                                {r.type.name} ➞ {r.name}.{r.semester} ➞ <span>{r.teacher.name}</span></SubNameId>
                        </Link>
                    </>
                ))}

            </AllSubjects>
        </>
    )
}

