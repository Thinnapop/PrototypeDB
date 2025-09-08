"use client";
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    const res = await signIn('credentials', { email, password, redirect: false });
    if (res?.error) setError('Invalid email or password');
    if (res?.ok) window.location.href = '/';
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <form onSubmit={onSubmit} className="w-full max-w-sm space-y-4">
        <h1 className="text-2xl font-bold">Log in</h1>
        <input className="w-full rounded bg-neutral-800 p-3" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input className="w-full rounded bg-neutral-800 p-3" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        {error && <p className="text-red-400 text-sm">{error}</p>}
        <button className="w-full bg-green-600 hover:bg-green-500 rounded p-3 font-semibold">Sign in</button>
      </form>
    </main>
  );
}
