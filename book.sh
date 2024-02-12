#!/usr/bin/bash

echo "記事のURLを入力"
read file_name
echo "出版社を入力"
read publisher
echo "書籍名を入力"
read title
echo "タグを入力"
read tags

FILE_NAME="./src/content/post/book-$file_name.mdx"
echo "---" > $FILE_NAME
echo "title: 「$title」を読んだ" >> $FILE_NAME
echo "published: $(date +%F)" >> $FILE_NAME
echo "description: $publisherの「$title」を読みました。" >> $FILE_NAME
echo "tags: [book, $tags]" >> $FILE_NAME
echo "---" >> $FILE_NAME