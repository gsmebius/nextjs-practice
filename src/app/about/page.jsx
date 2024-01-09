"use client";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "About Us",
// };

export default function AboutPage() {
  const router = useRouter();
  return (
    <section>
      <h1>About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis id
        quis, eius aperiam distinctio odit quisquam quas eligendi soluta,
        perferendis non fuga! Obcaecati animi quos veniam accusamus laudantium!
        Earum ullam qui necessitatibus dicta, corrupti ab quod ipsam voluptatem
        ut veniam. Magni repudiandae error, neque debitis commodi fugit
        laboriosam beatae itaque voluptatem obcaecati, repellat quam omnis
        veniam esse architecto aperiam quasi, facere dolore placeat laborum est
        nemo. Molestiae animi rerum totam et, corporis cumque. Consequuntur
        dolor quas natus exercitationem sit. Tempora reprehenderit fugiat rerum
        necessitatibus. Incidunt, rem repudiandae, rerum voluptatum vero odit,
        eligendi quis eius voluptatem fugit sunt consectetur est enim?
      </p>

      <button
        className="bg-sky-300 px-3 py-2 rounded-md"
        onClick={() => {
          alert("Se redireccionará a Home");
          router.push("/");
        }}
      >
        click
      </button>
    </section>
  );
}
