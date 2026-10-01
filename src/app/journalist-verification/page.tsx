import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function JournalistVerificationPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <article className="pt-32 pb-20 px-4 max-w-4xl mx-auto text-foreground/80 prose prose-lg">
        <h1 className="text-4xl md:text-6xl font-black text-foreground border-l-[10px] border-red-600 pl-8 uppercase mb-16 tracking-tighter">
          Journalist <span className="text-red-600">Verification</span>
        </h1>
        <div className="prose prose-xl max-w-none text-foreground/80 leading-relaxed space-y-10 font-medium">
          <section className="space-y-4">
            <h2 className="text-2xl font-black text-foreground uppercase tracking-tight">Vetting Our Reporters</h2>
            <p>
              Our reputation rests on the credibility of our journalists. Every reporter representing News The Truth undergoes a strict vetting process to verify their identity, past work, and commitment to ethical journalism.
            </p>
            <p>
              We ensure that all our citizen journalists and professional reporters adhere to our strict editorial guidelines. Anonymous sources are protected, but their information is verified rigorously before publication.
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  );
}
