import { SignupForm } from "@/components/forms/signup-form";
import { connect } from "@/lib/db";

export default function Home() {
  return (
    <div className="container mx-auto max-w-md py-12">
      <div className="rounded-lg border p-8 shadow-sm">
        <h1 className="mb-6 text-2xl font-bold">Create an Account</h1>
        <SignupForm />
      </div>
    </div>
  );
}
