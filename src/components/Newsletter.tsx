import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubscribed(true);
      setEmail('');
    }, 500);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="mx-auto h-12 w-12 text-indigo-600 mb-4" />
          <h2 className="text-3xl font-bold mb-4">
            Restez informé des dernières nouveautés
          </h2>
          <p className="text-gray-600 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir les dernières sorties et offres spéciales
          </p>

          {subscribed ? (
            <div className="bg-green-100 text-green-700 p-4 rounded-lg">
              Merci de votre inscription ! Vous recevrez bientôt nos actualités.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg border focus:ring-2 focus:ring-indigo-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                S'inscrire
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}