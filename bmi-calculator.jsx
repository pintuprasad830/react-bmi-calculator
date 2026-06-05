import { useState } from "react";

export function BMICalculator() {

    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState("");

    function calculateBMI() {

        if (weight === "" || height === "") {
            alert("Please enter weight and height");
            return;
        }

        let h = height / 100;

        let result = weight / (h * h);

        setBmi(result.toFixed(2));
    }

    return (
        <div className="container mt-5">

            <h2 className="text-center">BMI Calculator</h2>

            <div className="mb-3">
                <label className="form-label">Weight (kg)</label>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Weight"
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label className="form-label">Height (cm)</label>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Height"
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>

            <button
                className="btn btn-primary"
                onClick={calculateBMI}
            >
                Calculate BMI
            </button>

            <h3 className="mt-4">
                BMI : {bmi}
            </h3>

        </div>
    );
}