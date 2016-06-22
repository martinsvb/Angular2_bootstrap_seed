import { Component } from '@angular/core';
import { DocsService } from './docs.service';

@Component({
  moduleId: module.id,
  selector: 'sd-docs',
  templateUrl: 'docs.component.html',
  providers: [
    DocsService,
  ]
})

export class DocsComponent {
  docs = {
    "app\\base":[{"className":"controller","methods":[{"name":"__construct","type":"Public"}]}],
    "app\\router":[{"className":"router","methods":[{"name":"__construct","type":"Public"},{"name":"_getParams","type":"Private","params":["url"]},{"name":"_log","type":"Private"},{"name":"run","type":"Public"},{"name":"_pairParams","type":"Private"}]}],
    "app\\mail":[{"className":"mail","methods":[{"name":"setHeaders","type":"Public","params":["data"]},{"name":"send","type":"Public","params":["code","data"]}]}],
    "app\\exception":[{"className":"customException"}],
    "app\\database":[{"className":"db","parent":" <internal:PDO> class PDO ","methods":[{"name":"__construct","type":"Public","params":["host","user","password","database"]},{"name":"getHostName","type":"Public"},{"name":"getDbName","type":"Public"},{"name":"selQuery","type":"Public","params":["query","params","fetch","fetchMethod"]},{"name":"insQuery","type":"Public","params":["query","params"]},{"name":"runTransaction","type":"Public","params":["queries"]},{"name":"prepareQueryParams","type":"Public","params":["affectedColumns","data"]},{"name":"prepareUpdateColumns","type":"Public","params":["affectedColumns","lastValueColumn"]},{"name":"getQuery","type":"Public"},{"name":"prepare","type":"Public","params":["statement","options"]},{"name":"beginTransaction","type":"Public"},{"name":"commit","type":"Public"},{"name":"rollBack","type":"Public"},{"name":"inTransaction","type":"Public"},{"name":"setAttribute","type":"Public","params":["attribute","value"]},{"name":"exec","type":"Public","params":["query"]},{"name":"query","type":"Public"},{"name":"lastInsertId","type":"Public","params":["seqname"]},{"name":"errorCode","type":"Public"},{"name":"errorInfo","type":"Public"},{"name":"getAttribute","type":"Public","params":["attribute"]},{"name":"quote","type":"Public","params":["string","paramtype"]},{"name":"__wakeup","type":"Public"},{"name":"__sleep","type":"Public"},{"name":"getAvailableDrivers","type":"Public"}]}],
    "app\\response":[{"className":"response","methods":[{"name":"send","type":"Public","params":["code","data"]}]}],"modules\\_base\\content":[{"className":"contentController (Abstract)","parent":" <user> class app\\base\\controller ","methods":[{"name":"getAction","type":"Protected","params":["params","data"]},{"name":"postAction","type":"Protected","params":["params","data"]},{"name":"putAction","type":"Protected","params":["params","data"]},{"name":"deleteAction","type":"Protected","params":["params","data"]},{"name":"__construct","type":"Public"}]}],"modules\\action\\base":[{"className":"baseController","parent":" <user> abstract class modules\\_base\\content\\contentController extends app\\base\\controller ","methods":[{"name":"getAction","type":"Public","params":["params","data"]},{"name":"postAction","type":"Public","params":["params","data"]},{"name":"putAction","type":"Public","params":["params","data"]},{"name":"deleteAction","type":"Public","params":["params","data"]},{"name":"__construct","type":"Public"}]}],"modules\\action\\news":[{"className":"newsController","parent":" <user> abstract class modules\\_base\\content\\contentController extends app\\base\\controller ","methods":[{"name":"getAction","type":"Public","params":["params","data"]},{"name":"postAction","type":"Public","params":["params","data"]},{"name":"putAction","type":"Public","params":["params","data"]},{"name":"deleteAction","type":"Public","params":["params","data"]},{"name":"__construct","type":"Public"}]}],"modules\\action\\docs":[{"className":"docsController","methods":[{"name":"getDocumentation","type":"Public"},{"name":"getAction","type":"Public","params":["params","data"]}]}]};
  namespaces = Object.keys(this.docs);
}