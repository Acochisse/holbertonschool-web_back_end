-- import table dump from metal_bands.sql
-- Column names must be: band_name and lifespan (in years)
-- You should use attributes formed and split for computing the lifespan
-- this script can be executed on any database

SELECT band_name (IFNULL(split, 2020) - formed) AS lifespan
FROM metal_bands
WHERE style LIKE '%Glam rock%'
ORDER BY lifespan DESC;