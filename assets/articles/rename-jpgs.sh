for file in *.JPG; do
 git mv -f "$file" "${file%.JPG}.jpg"
done
