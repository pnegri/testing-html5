BaseModelPrivate =
  validate: () ->
    console.log "NOOOOO"
    false

  test: () ->
    console.log "OKIE DOKIE"
    console.log this
    this.save()

module.exports = BaseModelPrivate

