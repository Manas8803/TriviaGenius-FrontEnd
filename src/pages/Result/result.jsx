import './result.css';
export default function Result() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-12 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 sm:px-6 lg:px-8 dark:bg-gray-900">
      <div className="w-full max-w-md px-8 py-6 space-y-8 bg-white shadow-md rounded-md dark:bg-gray-800">
        <div>
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100">
            Your Quiz Results
          </h2>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-5xl font-bold text-center text-gray-900 dark:text-gray-100">
            85%
          </p>
          <p className="text-lg text-center text-gray-600 dark:text-gray-400">
            Great job! You've scored 85% on the quiz.
          </p>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Correct Answers
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              17
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Incorrect Answers
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              3
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Unanswered Questions
            </p>
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              0
            </p>
          </div>
        </div>
        <div>
          <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Retake Quiz
          </button>
        </div>
      </div>
    </main>
  );
}