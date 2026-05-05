export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          SaaS Churn Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Customer Churn<br />
          <span className="text-[#58a6ff]">30 Days Before Cancellation</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          ChurnGuard analyzes behavior patterns, support tickets, and usage metrics to surface at-risk accounts — with actionable playbooks to win them back.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Predicting Churn — $16/mo
        </a>
        <p className="mt-3 text-xs text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Social proof strip */}
        <div className="mt-14 grid grid-cols-3 gap-6 border border-[#30363d] rounded-xl p-6">
          <div>
            <div className="text-2xl font-bold text-white">87%</div>
            <div className="text-xs text-[#8b949e] mt-1">Prediction accuracy</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">30 days</div>
            <div className="text-xs text-[#8b949e] mt-1">Advance warning</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-white">3x</div>
            <div className="text-xs text-[#8b949e] mt-1">Retention improvement</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="border border-[#58a6ff]/40 rounded-2xl p-8 bg-[#161b22] text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Early Access</div>
          <div className="text-5xl font-bold text-white mb-1">$16</div>
          <div className="text-sm text-[#8b949e] mb-6">/month · billed monthly</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 text-left mb-8">
            {[
              'Churn predictions updated daily',
              'Behavioral pattern analysis',
              'Support ticket sentiment scoring',
              'Intervention playbook recommendations',
              'Webhook & API integrations',
              'Slack & email alerts',
              'Up to 5,000 tracked customers',
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does ChurnGuard predict churn so early?</h3>
            <p className="text-sm text-[#8b949e]">We ingest login frequency, feature usage depth, support ticket volume, and NPS signals via your existing APIs. Our ML model scores each account daily and flags those trending toward cancellation — typically 30 days before they act.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What integrations are supported?</h3>
            <p className="text-sm text-[#8b949e]">ChurnGuard connects to Stripe, Intercom, Zendesk, Segment, Mixpanel, and any custom data source via webhooks or REST API. Setup takes under 15 minutes with our guided onboarding.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription at any time?</h3>
            <p className="text-sm text-[#8b949e]">Yes. There are no long-term contracts. Cancel from your billing portal in one click and you won't be charged again. Your data is retained for 30 days after cancellation.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-xs text-[#8b949e]">
        © {new Date().getFullYear()} ChurnGuard. All rights reserved.
      </footer>
    </main>
  )
}
