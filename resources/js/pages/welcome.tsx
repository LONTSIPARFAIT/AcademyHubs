// resources/js/Pages/Welcome.tsx
import Header from '@/Components/Home/Header';
import Footer from '@/Components/Home/Footer';
import { Link, usePage } from '@inertiajs/react';

export default function Welcome() {
  const { auth } = usePage().props;

  const courses = [
    {
      title: 'Développement Web Complet',
      desc: 'HTML, CSS, JavaScript & Tailwind pour créer des sites modernes.',
      level: 'Débutant',
      img: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4d0f5?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'Laravel & Backend',
      desc: 'Construis des applications robustes adaptées au marché local.',
      level: 'Intermédiaire',
      img: 'https://images.unsplash.com/photo-1555066931-bf19c0fd1085?auto=format&fit=crop&w=800&q=80',
    },
    {
      title: 'React Moderne',
      desc: 'Interfaces dynamiques, hooks et composants réutilisables.',
      level: 'Intermédiaire',
      img: 'https://images.unsplash.com/photo-1633356122542-727a01e23861?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      <Header />

      <main className="flex-1">

        {/* Hero avec image + overlay + pulse infini sur CTA */}
        <section className="relative min-h-[70vh] flex items-center bg-gray-900 overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=2000&q=80"
              alt="Jeunes apprenants tech codant ensemble"
              className="w-full h-full object-cover brightness-50"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

          <div className="relative max-w-5xl mx-auto px-6 text-center z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-fade-in">
              Maîtrise les compétences tech<br className="hidden md:block" /> qui changent ta vie au Cameroun
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
              Cours 100% gratuits, projets concrets, communauté locale.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {!auth.user ? (
                <>
                  <Link
                    href="/register"
                    className="bg-indigo-600 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-xl hover:bg-indigo-700 transition duration-300 transform hover:-translate-y-1 hover:shadow-2xl animate-pulse-slow"
                  >
                    Commencer gratuitement
                  </Link>
                  <Link
                    href="/login"
                    className="border-2 border-white/70 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/10 transition duration-300"
                  >
                    Connexion
                  </Link>
                </>
              ) : (
                <Link
                  href="/dashboard"
                  className="bg-white text-indigo-700 px-12 py-6 rounded-xl font-bold text-xl shadow-2xl hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1 hover:shadow-3xl animate-pulse-slow"
                >
                  Accéder à mes cours →
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Avantages – fade-in progressif */}
        <section className="py-20 md:py-28 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
            {[
              { title: '100% Gratuit', desc: 'Accès illimité, sans pub ni frais cachés.' },
              { title: 'Projets Réels', desc: 'Apprends en construisant pour le marché camerounais.' },
              { title: 'Support Local', desc: 'Communauté WhatsApp et forums adaptés.' },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-indigo-500 transition duration-500 transform hover:-translate-y-3 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cours populaires – hover infini + zoom image */}
        <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-950">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-6 animate-fade-in">Cours les plus suivis</h2>
            <p className="text-center text-xl text-gray-600 dark:text-gray-400 mb-16">Ce que choisissent les apprenants camerounais</p>

            <div className="grid md:grid-cols-3 gap-10">
              {courses.map((course, i) => (
                <div
                  key={i}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover-lift animate-fade-in"
                  style={{ animationDelay: `${i * 150}ms` }}
                >
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={course.img}
                      alt={course.title}
                      className="w-full h-full object-cover transition duration-1000 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition duration-300">
                      {course.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-5">{course.desc}</p>
                    <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-sm font-semibold px-4 py-2 rounded-full">
                      {course.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Link
                href="/courses"
                className="text-indigo-600 dark:text-indigo-400 font-bold text-xl hover:underline inline-flex items-center gap-3 transition duration-300"
              >
                Voir tous les cours →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA final avec pulse infini */}
        <section className="py-20 bg-indigo-600 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-pulse-slow">Prêt à booster ta carrière ?</h2>
            <p className="text-2xl mb-10">Rejoins des milliers d'apprenants camerounais aujourd'hui.</p>
            {!auth.user && (
              <Link
                href="/register"
                className="bg-white text-indigo-700 font-bold px-12 py-6 rounded-2xl shadow-2xl hover:bg-gray-100 transition duration-300 transform hover:-translate-y-2 hover:shadow-3xl inline-block animate-pulse-slow"
              >
                Créer mon compte gratuit
              </Link>
            )}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}