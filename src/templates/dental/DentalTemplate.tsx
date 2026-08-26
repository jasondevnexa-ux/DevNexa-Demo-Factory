import { Mail, MapPin, Phone } from 'lucide-react';
import type { Business } from '../../data/types';

interface DentalTemplateProps {
  business: Business;
}

export function DentalTemplate({ business }: DentalTemplateProps) {
  const primaryColor = business.branding.primaryColor ?? '#0f766e';

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header
        className="px-4 py-6 text-white sm:px-6 lg:px-8"
        style={{ backgroundColor: primaryColor }}
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-wide opacity-90">
            {business.category}
          </p>
          <h1 className="mt-1 text-3xl font-semibold sm:text-4xl">{business.name}</h1>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
        {(business.hero.headline || business.hero.description) && (
          <section className="rounded-xl bg-white p-6 shadow-sm sm:p-8">
            {business.hero.headline && (
              <h2 className="text-2xl font-semibold sm:text-3xl">{business.hero.headline}</h2>
            )}
            {business.hero.description && (
              <p className="mt-3 text-gray-600">{business.hero.description}</p>
            )}
            {business.hero.image && (
              <img
                src={business.hero.image}
                alt={`${business.name} hero`}
                className="mt-6 w-full rounded-lg object-cover"
              />
            )}
          </section>
        )}

        {business.services.length > 0 && (
          <section>
            <h2 className="mb-4 text-xl font-semibold">Services</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {business.services.map((service) => (
                <article
                  key={service.name}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="font-medium" style={{ color: primaryColor }}>
                    {service.name}
                  </h3>
                  {service.description && (
                    <p className="mt-2 text-sm text-gray-600">{service.description}</p>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {business.about && (business.about.title || business.about.description) && (
          <section className="rounded-xl bg-white p-6 shadow-sm sm:p-8">
            {business.about.title && (
              <h2 className="text-xl font-semibold">{business.about.title}</h2>
            )}
            {business.about.description && (
              <p className="mt-3 text-gray-600">{business.about.description}</p>
            )}
            {business.about.image && (
              <img
                src={business.about.image}
                alt={`About ${business.name}`}
                className="mt-6 w-full rounded-lg object-cover"
              />
            )}
          </section>
        )}

        {business.doctors && business.doctors.length > 0 && (
          <section>
            <h2 className="mb-4 text-xl font-semibold">Our Doctors</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {business.doctors.map((doctor) => (
                <article
                  key={doctor.name}
                  className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  {doctor.image && (
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="mb-3 h-32 w-32 rounded-full object-cover"
                    />
                  )}
                  <h3 className="font-medium">{doctor.name}</h3>
                  {doctor.specialization && (
                    <p className="mt-1 text-sm text-gray-600">{doctor.specialization}</p>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        <section className="rounded-xl bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-xl font-semibold">Contact</h2>
          <ul className="mt-4 space-y-3 text-gray-700">
            {business.contact.phone && (
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`tel:${business.contact.phone}`} className="hover:underline">
                  {business.contact.phone}
                </a>
              </li>
            )}
            {business.contact.email && (
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
                <a href={`mailto:${business.contact.email}`} className="hover:underline">
                  {business.contact.email}
                </a>
              </li>
            )}
            {business.contact.address && (
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {business.contact.mapsUrl ? (
                  <a
                    href={business.contact.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {business.contact.address}
                  </a>
                ) : (
                  <span>{business.contact.address}</span>
                )}
              </li>
            )}
            {business.contact.openingHours && (
              <li className="text-sm text-gray-600">{business.contact.openingHours}</li>
            )}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            {business.contact.whatsapp && (
              <a
                href={`https://wa.me/${business.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-4 py-2 text-sm font-medium text-white"
                style={{ backgroundColor: primaryColor }}
              >
                WhatsApp
              </a>
            )}
            {business.social?.instagram && (
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Instagram
              </a>
            )}
            {business.social?.facebook && (
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50"
              >
                Facebook
              </a>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
