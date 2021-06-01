export const FormFieldStyles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    color: "var(--gray-3)",
    "& label": {
      margin: "0.25em 0",
    },
    "& input": {
      background: "var(--gray-2)",
      borderRadius: "5px",
      padding: "1em",
      outline: "none",
      border: "3px solid var(--black)",
      "&:focus": {
        border: "3px solid var(--blue)",
      },
      "&:active": {
        border: "3px solid var(--blue)",
      },
      "&.invalid": {
        border: "3px solid var(--red)",
      },
    },
    "& span": {
      lineHeight: "1",
      color: "var(--red-1)",
      marginTop: "0.25em",
      minHeight: "2em",
    },
  },
};
