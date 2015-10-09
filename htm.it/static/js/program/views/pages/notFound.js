/* ----------------------------------------------------------------------
 * Numenta Platform for Intelligent Computing (NuPIC)
 * Copyright (C) 2015, Numenta, Inc.  Unless you have purchased from
 * Numenta, Inc. a separate commercial license for this software code, the
 * following terms and conditions apply:
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero Public License version 3 as
 * published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero Public License for more details.
 *
 * You should have received a copy of the GNU Affero Public License
 * along with this program.  If not, see http://www.gnu.org/licenses.
 *
 * http://numenta.org/licenses/
 * ---------------------------------------------------------------------- */

(function() {

    HTMITUI.NotFoundView = Backbone.View.extend({

        template: _.template($('#not-found-tmpl').html()),

        msgs: HTMITUI.msgs('not-found-tmpl'),

        events: {
        },

        initialize: function(options) {
            var me = this;

            HTMITUI.utils.title(me.msgs.title);

            me.render();
        },

        render: function() {
            var me = this,
                data = {
                    baseUrl: NTA.baseUrl,
                    msgs: me.msgs,
                    site: HTMITUI.msgs('site')
                };

            me.$el.html(me.template(data));
            me.trigger('view-ready');
            return me;
        }

    });

})();