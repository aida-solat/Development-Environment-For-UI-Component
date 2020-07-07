const ignore = 0;

module.exports = {
  overrides: [
    {
      files: '**/*',
      env: {
        browser: true,
      },
      rules: {
        'jsx-a11y/anchor-is-valid': ignore,
        'import/no-unresolved': ignore,
        'react/prop-types': ignore,
        'react/react-in-jsx-scope': ignore,
        'import/no-extraneous-dependencies': ignore,
      },
    },
  ],
};
