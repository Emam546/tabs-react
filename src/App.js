import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
    const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        getData();
    }, []);
    async function getData() {
        setLoading(true);
        const res = await fetch(url);
        setJobs(await res.json());
        setLoading(false);
    }
    if (loading)
        return (
            <section>
                <h2>loading</h2>
            </section>
        );
    if (loading)
        return (
            <section className="section loading">
                <h2>loading ...</h2>
            </section>
        );
    const { title, dates, duties, company } = jobs[index];
    return (
        <section className="section">
            <div className="title">
                <h2>experience</h2>
                <div className="underline"></div>
            </div>
            <div className="jobs-center">
                <div className="btn-container" >
                    {jobs.map((item, i) => {
                        return <button 
                        key={i} 
                        onClick={()=>setIndex(i)}
                        className={`job-btn ${index==i && "active-btn"}`}
                        >{item.company}</button>;
                    })}
                </div>
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{dates}</p>
                    {duties.map((duty, i) => {
                        return (
                            <div key={i} className="job-desc">
                                <FaAngleDoubleRight className="job-icon" />
                                <p>{duty}</p>
                            </div>
                        );
                    })}
                </article>
            </div>
        </section>
    );
}

export default App;
