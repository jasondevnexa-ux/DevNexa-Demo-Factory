import { Link } from 'react-router-dom';

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <header className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
            DevNexa Demo Factory
          </h1>
          <p className="mt-4 text-gray-600">
            Internal prototype for generating personalized business website demos.
          </p>
        </header>

        <section className="mt-12 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-medium text-gray-900">Sample Demos</h2>
          <p className="mt-2 text-sm text-gray-600">
            Use these links to test the dynamic template routing during development.
          </p>
          <ul className="mt-6 space-y-3">
            <li>
              <Link
                to="/demo/pearl-dental"
                className="inline-flex w-full items-center justify-center rounded-lg bg-teal-700 px-4 py-3 text-sm font-medium text-white hover:bg-teal-800 sm:w-auto"
              >
                Pearl Dental demo
              </Link>
            </li>
            <li>
              <Link
                to="/demo/smile-dental"
                className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700 sm:w-auto"
              >
                Smile Care Dental demo
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
