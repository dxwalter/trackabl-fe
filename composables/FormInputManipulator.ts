export const useFormInputManipulator = () => {
  const HidePassword = (id: string) => {
    const doc = document.getElementById(id) as HTMLInputElement;
    if (doc) {
      doc.type = 'password';
    }
  };
  const ShowPassword = (id: string) => {
    const doc = document.getElementById(id) as HTMLInputElement;

    if (doc) {
      doc.type = 'text';
    }
  };

  return {
    HidePassword,
    ShowPassword,
  };
};
