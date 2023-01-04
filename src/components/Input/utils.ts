export const maskName = (value: string): string => {
  return value.replace(/\S/g, '').replace(/[A-Za-zÀ-ú][A-Za-zÀ-ú]+\s[A-Za-zÀ-ú][A-Za-zÀ-ú]+/, '$1');
};

export const maskCPF = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1');
};

export const maskPercent = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '% $1.$2')
    .replace(/(\d{2})\d+?$/, '$1');
};

export const maskDate = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{4})\d+?$/, '$1');
};

export const maskInteger = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{1})(\d{13})\d+?$/, '$1.$2')
    .replace(/(\d{1})(\d{12})\d+?$/, '$1.$2')
    .replace(/(\d{1})(\d{9})$/, '$1.$2')
    .replace(/(\d{1})(\d{6})$/, '$1.$2')
    .replace(/(\d{1})(\d{3})$/, '$1.$2');
};

export const maskFloat = (value: string): string => {
  return value
    .replace(/\D/g, '')
    .replace(/(\d{1})(\d{15})\d+?$/, '$1.$2')
    .replace(/(\d{1})(\d{14})\d+?$/, '$1.$2')
    .replace(/(\d{1})(\d{11})$/, '$1.$2')
    .replace(/(\d{1})(\d{8})$/, '$1.$2')
    .replace(/(\d{1})(\d{5})$/, '$1.$2')
    .replace(/(\d{1})(\d{1,2})$/, '$1,$2');
};
