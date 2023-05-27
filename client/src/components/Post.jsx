import { format } from "date-fns";
import { motion } from "framer-motion";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Post = ({ title, summary, img, createdAt, _id }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center"
    >
      <Card className=" flex-col md:flex-row w-full max-w-[48rem]">
        <CardHeader
          shadow={false}
          floated={false}
          className="md:w-2/5 shrink-0 m-0 rounded-r-none"
        >
          <img src={img} alt="image" className="w-full h-full object-cover" />
        </CardHeader>
        <CardBody>
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {title}
          </Typography>
          <Typography color="gray" className="font-normal mb-4">
            {summary}
          </Typography>
          <Typography color="gray" className="mb-4">
            Created on
            <span className="text-gray-500 ml-2">
              {format(new Date(createdAt), "MMMM dd, yyyy")}
            </span>
          </Typography>
          <Link to={`/post/${_id}`} className="inline-block">
            <Button
              variant="text"
              className="flex items-center gap-2 bg-blue-gray-50"
            >
              Read more
              <ArrowLongRightIcon strokeWidth={2} className="w-4 h-4" />
            </Button>
          </Link>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default Post;
