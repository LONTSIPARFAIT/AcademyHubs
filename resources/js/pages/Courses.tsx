// resources/js/Pages/Courses.tsx
import Header from '@/Components/Home/Header';
import Footer from '@/Components/Home/Footer';
import { Link, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Courses() {
  const { auth } = usePage().props;

  // États pour les filtres
  const [search, setSearch] = useState('');
  const [levelFilter, setLevelFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [loading, setLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Statistiques animées
  const [stats, setStats] = useState({
    totalCourses: 45,
    activeStudents: 1200,
    hoursContent: 280,
    completionRate: 92
  });

  // Animation des statistiques
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        activeStudents: prev.activeStudents + Math.floor(Math.random() * 5)
      }));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Données des cours (ajoutées)
  const courses = [
    {
      id: 1,
      title: 'Développement Web Fullstack',
      desc: 'Maîtrisez HTML, CSS, JavaScript, Node.js et Tailwind pour créer des applications web complètes.',
      level: 'Débutant',
      category: 'web',
      duration: '12 semaines',
      lessons: 45,
      students: 450,
      rating: 4.8,
      instructor: 'Jean Dupont',
      featured: true,
      progress: 0,
      img: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4d0f5?auto=format&fit=crop&w=800&q=80',
      tags: ['Frontend', 'Backend', 'Projet']
    },
    {
      id: 2,
      title: 'Laravel & Développement Backend',
      desc: 'Construisez des applications robustes adaptées au marché africain avec Laravel et MySQL.',
      level: 'Intermédiaire',
      category: 'backend',
      duration: '10 semaines',
      lessons: 38,
      students: 320,
      rating: 4.9,
      instructor: 'Marie Kamga',
      featured: true,
      progress: auth.user ? 30 : 0,
      img: 'https://images.unsplash.com/photo-1555066931-bf19c0fd1085?auto=format&fit=crop&w=800&q=80',
      tags: ['Backend', 'API', 'Base de données']
    },
    {
      id: 3,
      title: 'React & Next.js Avancé',
      desc: 'Créez des applications React modernes avec Next.js 14, TypeScript et Tailwind CSS.',
      level: 'Avancé',
      category: 'frontend',
      duration: '8 semaines',
      lessons: 32,
      students: 280,
      rating: 4.7,
      instructor: 'Samuel Nkono',
      featured: false,
      progress: auth.user ? 65 : 0,
      img: 'https://images.unsplash.com/photo-1633356122542-727a01e23861?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'TypeScript', 'Next.js']
    },
    {
      id: 4,
      title: 'UI/UX Design pour Débutants',
      desc: 'Apprenez les principes du design d\'interface et créez des expériences utilisateur exceptionnelles.',
      level: 'Débutant',
      category: 'design',
      duration: '6 semaines',
      lessons: 25,
      students: 190,
      rating: 4.6,
      instructor: 'Sarah Mbala',
      featured: false,
      progress: 0,
      img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
      tags: ['Design', 'Figma', 'Prototype']
    },
    {
      id: 5,
      title: 'DevOps & Déploiement Cloud',
      desc: 'Déployez vos applications avec Docker, AWS et CI/CD pour le marché africain.',
      level: 'Intermédiaire',
      category: 'devops',
      duration: '9 semaines',
      lessons: 35,
      students: 210,
      rating: 4.8,
      instructor: 'Paul Owono',
      featured: true,
      progress: 0,
      img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
      tags: ['DevOps', 'Cloud', 'Docker']
    },
    {
      id: 6,
      title: 'Mobile avec React Native',
      desc: 'Développez des applications mobiles cross-platform pour le marché camerounais.',
      level: 'Intermédiaire',
      category: 'mobile',
      duration: '11 semaines',
      lessons: 40,
      students: 180,
      rating: 4.5,
      instructor: 'Lisa Ndifor',
      featured: false,
      progress: auth.user ? 15 : 0,
      img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      tags: ['Mobile', 'React Native', 'iOS/Android']
    },
    {
      id: 7,
      title: 'Python & Data Science',
      desc: 'Apprenez Python et les bases de la data science avec des projets concrets.',
      level: 'Débutant',
      category: 'data',
      duration: '14 semaines',
      lessons: 50,
      students: 230,
      rating: 4.7,
      instructor: 'David Fotso',
      featured: false,
      progress: 0,
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'Data Science', 'Analyse']
    },
    {
      id: 8,
      title: 'WordPress Avancé',
      desc: 'Créez des sites professionnels avec WordPress et développez des thèmes personnalisés.',
      level: 'Intermédiaire',
      category: 'web',
      duration: '7 semaines',
      lessons: 28,
      students: 160,
      rating: 4.4,
      instructor: 'Claude Nana',
      featured: false,
      progress: 0,
      img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      tags: ['WordPress', 'CMS', 'Thèmes']
    }
  ];

  // Catégories disponibles
  const categories = [
    { id: 'all', label: 'Toutes', count: courses.length },
    { id: 'web', label: 'Web Dev', count: courses.filter(c => c.category === 'web').length },
    { id: 'frontend', label: 'Frontend', count: courses.filter(c => c.category === 'frontend').length },
    { id: 'backend', label: 'Backend', count: courses.filter(c => c.category === 'backend').length },
    { id: 'mobile', label: 'Mobile', count: courses.filter(c => c.category === 'mobile').length },
    { id: 'design', label: 'Design', count: courses.filter(c => c.category === 'design').length },
    { id: 'devops', label: 'DevOps', count: courses.filter(c => c.category === 'devops').length },
    { id: 'data', label: 'Data', count: courses.filter(c => c.category === 'data').length }
  ];

  // Niveaux disponibles
  const levels = [
    { id: 'all', label: 'Tous', count: courses.length },
    { id: 'débutant', label: 'Débutant', count: courses.filter(c => c.level === 'Débutant').length },
    { id: 'intermédiaire', label: 'Intermédiaire', count: courses.filter(c => c.level === 'Intermédiaire').length },
    { id: 'avancé', label: 'Avancé', count: courses.filter(c => c.level === 'Avancé').length }
  ];

  // Filtrer les cours
  const filteredCourses = courses.filter(course => {
    const matchesSearch = search === '' || 
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.desc.toLowerCase().includes(search.toLowerCase()) ||
      course.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()));
    
    const matchesLevel = levelFilter === 'all' || 
      course.level.toLowerCase() === levelFilter.toLowerCase();
    
    const matchesCategory = categoryFilter === 'all' || 
      course.category === categoryFilter;
    
    return matchesSearch && matchesLevel && matchesCategory;
  });

  // Trier les cours
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch(sortBy) {
      case 'popular':
        return b.students - a.students;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.id - a.id;
      case 'duration':
        return parseInt(a.duration) - parseInt(b.duration);
      default:
        return 0;
    }
  });

  // Fonction pour simuler le démarrage d'un cours
  const handleStartCourse = (courseId) => {
    setLoading(true);
    // Simulation de chargement
    setTimeout(() => {
      setLoading(false);
      // Redirection ou ouverture du cours
      if (auth.user) {
        window.location.href = `/courses/${courseId}/start`;
      } else {
        window.location.href = '/register';
      }
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">

      <Header />

      <main className="pt-16">

        {/* Hero Section avec statistiques */}
        <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-12 md:py-16 overflow-hidden">
          {/* Particules animées */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${10 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Explorez nos cours gratuits
              </h1>
              <p className="text-lg md:text-xl text-indigo-100 max-w-3xl mx-auto">
                Formations pratiques adaptées au marché camerounais • Projets concrets • Communauté active
              </p>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Cours disponibles', value: `${stats.totalCourses}+`, icon: '📚', color: 'text-blue-300' },
                { label: 'Apprenants actifs', value: `${stats.activeStudents}+`, icon: '👥', color: 'text-green-300' },
                { label: 'Heures de contenu', value: `${stats.hoursContent}+`, icon: '⏱️', color: 'text-yellow-300' },
                { label: 'Taux de complétion', value: `${stats.completionRate}%`, icon: '🎯', color: 'text-pink-300' }
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-sm text-indigo-200">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Appel à l'action */}
            {!auth.user && (
              <div className="text-center">
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  Commencer gratuitement
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Filtres et recherche */}
        <section className="sticky top-16 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-4 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              
              {/* Recherche */}
              <div className="w-full lg:w-96">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Rechercher un cours, une technologie..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                  />
                  <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  {search && (
                    <button
                      onClick={() => setSearch('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      ✕
                    </button>
                  )}
                </div>
              </div>

              {/* Filtres */}
              <div className="flex flex-wrap gap-3">
                {/* Tri */}
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={e => setSortBy(e.target.value)}
                    className="appearance-none px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10 text-sm"
                  >
                    <option value="popular">Plus populaires</option>
                    <option value="rating">Meilleures notes</option>
                    <option value="newest">Plus récents</option>
                    <option value="duration">Plus courts</option>
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* Filtre catégorie */}
                <div className="relative">
                  <select
                    value={categoryFilter}
                    onChange={e => setCategoryFilter(e.target.value)}
                    className="appearance-none px-4 py-2.5 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 pr-10 text-sm"
                  >
                    {categories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label} ({cat.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Filtres rapides niveau */}
            <div className="mt-4 flex flex-wrap gap-2">
              {levels.map(level => (
                <button
                  key={level.id}
                  onClick={() => setLevelFilter(level.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    levelFilter === level.id
                      ? 'bg-indigo-600 text-white shadow-md'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  {level.label} ({level.count})
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Liste des cours */}
        <section className="py-10 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête résultats */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {sortedCourses.length} cours trouvés
                </h2>
                {search && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Résultats pour "{search}"
                  </p>
                )}
              </div>
              <div className="text-sm text-gray-500">
                {filteredCourses.length} sur {courses.length} cours
              </div>
            </div>

            {/* Grille des cours */}
            {sortedCourses.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {sortedCourses.map((course) => (
                  <div
                    key={course.id}
                    className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-2 flex flex-col"
                  >
                    {/* Badge featured */}
                    {course.featured && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                          POPULAIRE
                        </span>
                      </div>
                    )}

                    {/* Image du cours */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={course.img}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      
                      {/* Badge niveau */}
                      <div className="absolute bottom-3 left-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          course.level === 'Débutant' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                          course.level === 'Intermédiaire' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                          'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}>
                          {course.level}
                        </span>
                      </div>
                    </div>

                    {/* Contenu du cours */}
                    <div className="p-5 flex-1 flex flex-col">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {course.tags.slice(0, 2).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                        {course.tags.length > 2 && (
                          <span className="px-2 py-1 text-gray-400 text-xs">
                            +{course.tags.length - 2}
                          </span>
                        )}
                      </div>

                      {/* Titre */}
                      <h3 className="font-bold text-lg mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                        {course.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
                        {course.desc}
                      </p>

                      {/* Informations */}
                      <div className="space-y-3 mb-4">
                        {/* Note et étudiants */}
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-1">
                            <div className="flex text-yellow-400">
                              {'★'.repeat(Math.floor(course.rating))}
                              {'☆'.repeat(5 - Math.floor(course.rating))}
                            </div>
                            <span className="text-gray-700 dark:text-gray-300 font-medium ml-1">
                              {course.rating}
                            </span>
                          </div>
                          <div className="text-gray-500 dark:text-gray-500">
                            {course.students} étudiants
                          </div>
                        </div>

                        {/* Durée et leçons */}
                        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {course.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            {course.lessons} leçons
                          </div>
                        </div>

                        {/* Instructeur */}
                        <div className="flex items-center gap-2 pt-2 border-t border-gray-100 dark:border-gray-700">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                            <span className="text-indigo-600 dark:text-indigo-400 font-bold text-xs">
                              {course.instructor.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="text-xs text-gray-600 dark:text-gray-400">
                            {course.instructor}
                          </span>
                        </div>
                      </div>

                      {/* Bouton d'action */}
                      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                        {auth.user ? (
                          <div>
                            {/* Progression */}
                            {course.progress > 0 ? (
                              <>
                                <div className="mb-3">
                                  <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                                    <span>Votre progression</span>
                                    <span>{course.progress}%</span>
                                  </div>
                                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-500"
                                      style={{ width: `${course.progress}%` }}
                                    ></div>
                                  </div>
                                </div>
                                <button
                                  onClick={() => handleStartCourse(course.id)}
                                  disabled={loading}
                                  className="w-full py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                  {loading ? (
                                    <div className="flex items-center justify-center">
                                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                      <span className="ml-2">Chargement...</span>
                                    </div>
                                  ) : (
                                    'Continuer le cours'
                                  )}
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => handleStartCourse(course.id)}
                                disabled={loading}
                                className="w-full py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                {loading ? (
                                  <div className="flex items-center justify-center">
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                    <span className="ml-2">Chargement...</span>
                                  </div>
                                ) : (
                                  'Commencer gratuitement'
                                )}
                              </button>
                            )}
                          </div>
                        ) : (
                          <Link
                            href={`/courses/${course.id}`}
                            className="block text-center py-2.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 font-semibold rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                          >
                            Voir les détails
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Aucun résultat */
              <div className="text-center py-20">
                <div className="w-24 h-24 mx-auto mb-6 text-gray-400">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Aucun cours ne correspond à votre recherche
                </h3>
                <p className="text-gray-500 dark:text-gray-500 mb-6">
                  Essayez avec d'autres mots-clés ou modifiez vos filtres
                </p>
                <button
                  onClick={() => {
                    setSearch('');
                    setLevelFilter('all');
                    setCategoryFilter('all');
                  }}
                  className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            )}

            {/* Pagination (simulée) */}
            {sortedCourses.length > 0 && (
              <div className="mt-12 flex justify-center">
                <nav className="flex items-center gap-2">
                  <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    Précédent
                  </button>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg">1</button>
                  <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    2
                  </button>
                  <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    3
                  </button>
                  <span className="px-2 text-gray-500">...</span>
                  <button className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                    Suivant
                  </button>
                </nav>
              </div>
            )}
          </div>
        </section>

        {/* Section d'appel à l'action */}
        {!auth.user && (
          <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à commencer votre apprentissage ?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Rejoignez plus de 1 200 apprenants camerounais qui développent leurs compétences gratuitement
              </p>
              <Link
                href="/register"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                S'inscrire gratuitement
              </Link>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}