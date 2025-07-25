"use client";

type Props = {
  loading?: boolean;
};

export default function ContactButton({ loading = false }: Props) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`font-medium w-full border-2 px-6 py-3 rounded-lg transition 
        ${loading ? "bg-gray-600 border-gray-600 text-gray-300 cursor-not-allowed" : 
        "bg-blue-600 border-blue-600 text-gray-300 hover:bg-gray-900 hover:text-blue-600"}`}
    >
      {loading ? "Sending..." : "Send Message"}
    </button>
  );
}
