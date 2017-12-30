function seedEvents(req, res) {
  const tags = [
    { name: 'Foreign Languages' },
    { name: 'Business' },
    { name: 'Hustling' },
    { name: 'Running' },
    { name: 'Swimming' },
    { name: 'Lifting' }
  ];
  for (tag of tags) {
    const newTag = new Tag(tag);
    newTag.save()
  }

  res.send('Seeded!')
}
