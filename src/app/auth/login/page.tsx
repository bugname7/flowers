import type { Metadata } from "next";
import LoginForm from "./LoginForm";
import Map from "../../components/Map"
export const metadata: Metadata = {
  title: "Kirish — Florist Diyora",
  description: "Florist Diyora akkauntingizga kiring",
};

export default function LoginPage() {
  return (
    <main className="p-6 w-full mx-auto">
     
      <LoginForm />
      <Map />
    </main>
  );
}
