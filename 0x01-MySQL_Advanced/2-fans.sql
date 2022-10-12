--Write a SQL script that ranks country origins of bands, ordered by the number of (non-unique) fans
-- imported from the file metal_bands.sql
-- Column names must be: origin and nb_fans

SELECT origin, COUNT(*) AS nb_fans
FROM metal_bands
GROUP BY origin
ORDER BY nb_fans DESC;