export default function Registry() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 text-center sm:px-6 sm:py-10">
      <p className="text-base sm:text-lg">
        Please don’t feel as though you have to get us a gift. Your presence is
        enough!
      </p>
      <p className="mt-4 text-base sm:text-lg">
        If you would like to contribute to our honeymoon, you can do so here:
      </p>
      <a
        href="https://monzo.me/benpepers?h=vFGdDG&account_type=joint"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-base underline transition-opacity hover:opacity-70 sm:text-lg"
      >
        Contribute to our honeymoon
      </a>
      <p className="mt-4 text-base sm:text-lg">Alternatively:</p>
      <a
        href="https://paypal.me/bp713"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-base underline transition-opacity hover:opacity-70 sm:text-lg"
      >
        Contribute via PayPal
      </a>
    </div>
  );
}
