import { Link, useParams } from 'react-router-dom';
import { getBusinessBySlug } from '../data/businessRegistry';
import { DentalTemplate } from '../templates/dental/DentalTemplate';

export function DemoPage() {
  const { slug } = useParams<{ slug: string }>();
  const business = slug ? getBusinessBySlug(slug) : undefined;

  if (!business) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md rounded-xl border border-gray-200 bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-semibold text-gray-900">Demo Not Found</h1>
          <p className="mt-3 text-gray-600">
            No demo exists for <span className="font-mono text-sm">{slug ?? 'unknown'}</span>.
          </p>
          <Link
            to="/"
            className="mt-6 inline-block rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return <DentalTemplate business={business} />;
}
