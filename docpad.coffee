# DocPad Configuration File
# http://docpad.org/docs/config
fs = require 'fs'

# Define the DocPad Configuration
docpadConfig = {
  templateData:
    site:
      title: "Node Workflows"
      description: "Code and examples of workflows with Node"
      keywords: "node, workflows"

    getPreparedTitle: ->
      # if we have a document title, then we should use that and suffix the site's title onto it
      if @document.title
        "#{@document.title} | #{@site.title}"
      # if our document does not have it's own title, then we should just use the site's title
      else
        @site.title

    getPreparedDescription: ->
      # if we have a document description, then we should use that, otherwise use the site's description
      @document.description or @site.description

    getPreparedKeywords: ->
      # Merge the document keywords with the site keywords
      @site.keywords.concat(@document.keywords or []).join(', ')

    getPublicPath: ->
      depth = @document.url.split('/').length - 2
      path = ''
      while depth > 0
        path += '../'
        depth--
      return path


  collections:
    pages: ->
      @getCollection('documents')
      .findAllLive(
        relativeOutDirPath: 'pages'
        order:
          $exists: true
        [ order: 1 ]
      ).on 'add', (model) ->
        model.setMetaDefaults layout:"default"
}

# Export the DocPad Configuration
module.exports = docpadConfig