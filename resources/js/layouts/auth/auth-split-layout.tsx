// layouts/auth/auth-split-layout.tsx
import { Link, usePage } from '@inertiajs/react';
import { type PropsWithChildren } from 'react';

import AppLogoIcon from '@/components/app-logo-icon';
import { home } from '@/routes';
import { type SharedData } from '@/types';

interface AuthLayoutProps {
    title?: string;
    description?: string;
}

export default function AuthSplitLayout({
    children,
    title,
    description,
}: PropsWithChildren<AuthLayoutProps>) {
    const { name } = usePage<SharedData>().props;

    return (
        <div className="relative grid h-dvh flex-col items-center justify-center px-8 sm:px-0 lg:max-w-none lg:grid-cols-2 lg:px-0">
            {/* Colonne gauche avec image de fond */}
            <div className="relative hidden h-full flex-col p-10 text-white lg:flex">
                {/* Image de fond avec overlay */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80"
                        alt="Étudiants apprenant le développement web"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-indigo-900/80 to-purple-900/90"></div>
                </div>
                
                {/* Logo et contenu */}
                <div className="relative z-20 flex flex-col h-full">
                    <Link
                        href={home()}
                        className="flex items-center text-lg font-medium mb-8"
                    >
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3">
                            <div className="w-6 h-6 bg-indigo-600 rounded-md flex items-center justify-center">
                                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                        </div>
                        <span className="text-2xl font-bold">{name}</span>
                    </Link>

                    {/* Contenu inspirant */}
                    <div className="flex-1 flex flex-col justify-center max-w-md">
                        <h1 className="text-4xl font-black mb-6 leading-tight">
                            Démarrez votre carrière<br />en développement web
                        </h1>
                        <p className="text-lg text-gray-300 mb-10">
                            Formations 100% gratuites, projets concrets et communauté active pour apprendre le développement adapté au marché camerounais.
                        </p>

                        {/* Avantages */}
                        <div className="space-y-4 mb-12">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-300">Cours gratuits et certifiants</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-300">Projets pratiques du marché</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                    <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-gray-300">Communauté d'entraide</span>
                            </div>
                        </div>

                        {/* Statistiques */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                <div className="text-2xl font-bold">1.2K+</div>
                                <div className="text-sm text-gray-300">Apprenants</div>
                            </div>
                            <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                <div className="text-2xl font-bold">45+</div>
                                <div className="text-sm text-gray-300">Cours</div>
                            </div>
                            <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                                <div className="text-2xl font-bold">92%</div>
                                <div className="text-sm text-gray-300">Satisfaction</div>
                            </div>
                        </div>
                    </div>

                    {/* Note en bas */}
                    <div className="text-sm text-gray-400 pt-8 border-t border-white/10">
                        Rejoignez la première communauté de développeurs camerounais
                    </div>
                </div>
            </div>

            {/* Colonne droite - Formulaire */}
            <div className="w-full lg:p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
                    {/* Logo mobile */}
                    <Link
                        href={home()}
                        className="relative z-20 flex items-center justify-center lg:hidden mb-6"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <span className="text-2xl font-bold text-gray-900 dark:text-white">{name}</span>
                        </div>
                    </Link>

                    {/* Titre et description */}
                    <div className="flex flex-col items-start gap-3 text-left sm:items-center sm:text-center">
                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
                        <p className="text-base text-gray-600 dark:text-gray-400">
                            {description}
                        </p>
                    </div>
                    
                    {/* Contenu du formulaire */}
                    {children}
                </div>
            </div>
        </div>
    );
}