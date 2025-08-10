import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import './PwebDeveloper.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function PwebDeveloper() {
    const [products, setProducts] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);
    const [averageReviews, setAverageReviews] = useState({ review1: 0, review2: 0, review3: 0 });

    const filterData = async () => {
        let key = "Web Developer";
        if (key) {
            let result = await fetch(`http://localhost:5000/searchs/${key}`);
            result = await result.json();
            setHasSearched(true);
            if (result) {
                setProducts(result);
                calculateAverages(result);
            }
        }
    };

    const calculateAverages = (data) => {
        if (data.length > 0) {
            const totalReviews = data.length;
            const sumReviews = data.reduce((acc, item) => {
                acc.review1 += item.review1;
                acc.review2 += item.review2;
                acc.review3 += item.review3;
                return acc;
            }, { review1: 0, review2: 0, review3: 0 });

            setAverageReviews({
                review1: (sumReviews.review1 / totalReviews).toFixed(1),
                review2: (sumReviews.review2 / totalReviews).toFixed(1),
                review3: (sumReviews.review3 / totalReviews).toFixed(1),
            });
        } else {
            setAverageReviews({ review1: 0, review2: 0, review3: 0 });
        }
    };

    const data = {
        labels: ["Technical Explanation", "Technical Knowledge", "Domain Expertise"],
        datasets: [
            {
                label: "Average Score (out of 10)",
                data: [averageReviews.review1, averageReviews.review2, averageReviews.review3],
                backgroundColor: ["#4CAF50", "#FFC107", "#2196F3"],
                barThickness: 20,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };

    return (
        <div className="web-developer-container">
            <button className="filter-button" onClick={filterData}>See Ratings given by freshers</button>

            <div className="cards-container">
                {
                    hasSearched && products.length > 0 ? (
                        products.map((items) => (
                            <div className="card" key={items._id}>
                                <h3 className="card-title">{items.name}</h3>
                                <p className="card-info">Domain: {items.domain}</p>
                                <p className="card-info">Technical Explanation: {items.review1}/10</p>
                                <p className="card-info">Technical Knowledge: {items.review2}/10</p>
                                <p className="card-info">Domain Expertise: {items.review3}/10</p>
                                <p className="card-info">Description: {items.description}</p>
                            </div>
                        ))
                    ) : (
                        hasSearched && <h1 className="no-data">No candidate in this domain is listed yet.</h1>
                    )
                }
            </div>

            {hasSearched && products.length > 0 && (
                <div className="bar-graph-container">
                    <h2>Average Review Scores</h2>
                    <div className="chart-wrapper">
                        <Bar data={data} options={options} />
                    </div>
                </div>
            )}
        </div>
    );
}

export default PwebDeveloper;
