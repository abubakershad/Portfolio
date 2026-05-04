"use client";

type Props = {
  loading?: boolean;
};

export default function ContactButton({ loading = false }: Props) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium hover:opacity-90 transition disabled:opacity-50"
    >
      {loading ? "Sending..." : "Send Message"}
    </button>
  );
}
