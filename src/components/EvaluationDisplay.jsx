"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Button } from "./ui/button";

const EvaluationDisplay = ({ fileData, setShowEvaluation, setFile, reset }) => {
  const [evaluationData, setEvaluationData] = useState(null);

  useEffect(() => {
    const storedData =
      JSON.parse(localStorage.getItem("evaluationResults")) || [];
    const evaluation = storedData.find((item) => item.id === fileData.id);
    setEvaluationData(evaluation);
  }, [fileData]);

  const handleReset = () => {
    setFile(null);
    reset();
    setShowEvaluation(false);
  };

  return (
    <div className="bg-light-bg p-8 rounded-3xl shadow-lg mt-8 space-y-6 border border-light-border">
      <h2 className="text-xl font-bold mb-4">Evaluation Results</h2>
      {evaluationData ? (
        <div>
          <div className="flex items-center space-x-2 mb-4 h-auto w-auto">
            <div className="h-1/2">
              <CircularProgressbar
                value={evaluationData.overallScore}
                text={`${evaluationData.overallScore}%`}
              />
            </div>
            <div>
              <p className="text-lg font-medium">Overall Score</p>
              <p className="text-gray-500">
                Evaluation Date:{" "}
                {dayjs(evaluationData.date).format("DD/MM/YYYY")}
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Score Breakdown</h3>
            <ul>
              {evaluationData.scores.map((score) => (
                <li key={score.criteria} className="flex justify-between">
                  <span>{score.criteria}:</span>
                  <span>{score.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>No evaluation data available.</p>
      )}
      <Button className="mt-2" onClick={handleReset}>
        Evaluvate again
      </Button>
    </div>
  );
};

export default EvaluationDisplay;
